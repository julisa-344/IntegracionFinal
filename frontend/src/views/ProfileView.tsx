import { useForm } from 'react-hook-form'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useState, useEffect } from 'react'
import { toast } from 'sonner'
import ErrorMessage from '../components/ErrorMessage'
import LoadingSkeleton from '../components/LoadingSkeleton'
import { ProfileForm, User } from '../types'
import { updateProfile, uploadImage, getUser } from '../api/DevTreeAPI'
import useSocket from '../hooks/useSocket'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { motion } from 'framer-motion'

export default function ProfileView() {
    const queryClient = useQueryClient()
    
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getUser
    })

    const [profileViews, setProfileViews] = useState(0)
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProfileForm>()

    useEffect(() => {
        if(user) {
            reset({
                handle: user.handle,
                description: user.description
            })
            setProfileViews(user.profileViews)
        }
    }, [user, reset])

    // Manejar actualizaciones en tiempo real del contador
    const onSocketUpdate = useCallback((payload: any) => {
        if (!user || payload.handle !== user.handle) return
        setProfileViews(payload.profileViews)
        // También actualizar React Query
        queryClient.setQueryData(['user'], (prev: User) => ({
            ...prev,
            profileViews: payload.profileViews
        }))
    }, [user, queryClient])

    // Conectar socket para escuchar cambios en perfil
    useSocket(import.meta.env.VITE_API_URL, user?.handle || '', onSocketUpdate)

    const updateProfileMutation = useMutation({
        mutationFn: updateProfile,
        onError: (error) => {
            toast.error(error.message)
        }, 
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['user']})
        }
    })

    const uploadImageMutation = useMutation({
        mutationFn: uploadImage,
        onError: (error) => {
            toast.error(error.message)
        }, 
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], (prevData: User) => {
                return {
                    ...prevData,
                    image: data
                }
            })
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            uploadImageMutation.mutate(e.target.files[0])
        }
    }

    const handleUserProfileForm = (formData: ProfileForm) => {
        if(!user) return;
        const updatedUser = { ...user, ...formData }
        updateProfileMutation.mutate(updatedUser)
    }

    if(isLoading) return <LoadingSkeleton />
    if(isError) return <p className="text-center p-10 text-red-500">Error al cargar perfil</p>
    if(!user) return null

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-end mb-5">
                <ThemeSwitcher />
            </div>
            <motion.form
                className="bg-white dark:bg-slate-800 p-10 rounded-lg space-y-5 shadow-lg transition-colors duration-300"
                onSubmit={handleSubmit(handleUserProfileForm)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <legend className="text-2xl text-slate-800 dark:text-white text-center">Editar Información</legend>

                <div className="text-center bg-slate-100/50 dark:bg-slate-700/50 rounded-lg p-3 max-w-sm mx-auto">
                    <p className="text-sm text-slate-600 dark:text-slate-300">Visitas a mi perfil</p>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">{profileViews}</p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <label
                        className="text-slate-800 dark:text-slate-200"
                        htmlFor="handle"
                    >Handle:</label>
                    <input
                        type="text"
                        className="border-none bg-slate-100 dark:bg-slate-900 dark:text-white rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                        placeholder="handle o Nombre de Usuario"
                        {...register('handle', {
                            required: "El Nombre de Usuario es obligatorio"
                        })}
                    />

                    {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label
                        className="text-slate-800 dark:text-slate-200"
                        htmlFor="description"
                    >Descripción:</label>
                    <textarea
                        className="border-none bg-slate-100 dark:bg-slate-900 dark:text-white rounded-lg p-2 focus:ring-2 focus:ring-cyan-500"
                        placeholder="Tu Descripción"
                        {...register('description', {
                            required: "La Descripción es obligatoria"
                        })}
                    />

                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label
                        className="text-slate-800 dark:text-slate-200"
                        htmlFor="image"
                    >Imagen:</label>
                    <input
                        id="image"
                        type="file"
                        name="image"
                        className="border-none bg-slate-100 dark:bg-slate-900 dark:text-white rounded-lg p-2 w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 hover:bg-cyan-500 p-2 text-lg w-full uppercase text-slate-600 dark:text-slate-800 rounded-lg font-bold cursor-pointer transition-colors"
                    value='Guardar Cambios'
                />
            </motion.form>
        </div>
    )
}