import { User, UserHandle } from '../types';

export const getUser = async (): Promise<User> => {
    return Promise.resolve({
        handle: "julisa",
        name: "Julisa",
        email: "julisa@example.com",
        _id: "1",
        description: "Software Engineer",
        image: "https://via.placeholder.com/150",
        links: JSON.stringify([{ name: "facebook", url: "https://facebook.com", enabled: true }]),
        profileViews: 42
    });
}

export const updateProfile = async (user: User): Promise<string> => {
    console.log(user);
    return Promise.resolve("Profile updated successfully");
}

export const uploadImage = async (file: File): Promise<string> => {
    console.log(file);
    return Promise.resolve("https://via.placeholder.com/150");
}

export const getUserByHandle = async (handle: string): Promise<UserHandle> => {
    return Promise.resolve({
        handle,
        name: "Test User",
        description: "This is a test user.",
        image: "https://via.placeholder.com/150",
        links: JSON.stringify([{ name: "facebook", url: "https://facebook.com", enabled: true }]),
        profileViews: 100
    });
}
