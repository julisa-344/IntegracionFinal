import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import useTheme from '../hooks/useTheme'

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme()
    const enabled = theme === 'dark'

    return (
        <Switch
            checked={enabled}
            onChange={toggleTheme}
            className={`${enabled ? 'bg-slate-700' : 'bg-cyan-500'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex items-center justify-center`}
            >
                {enabled ? (
                    <MoonIcon className="h-5 w-5 text-slate-700" />
                ) : (
                    <SunIcon className="h-5 w-5 text-cyan-500" />
                )}
            </span>
        </Switch>
    )
}
