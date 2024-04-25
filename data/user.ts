import db from "@/lib/db";


export const getUSerByEmail = async (email: string) => {
    try {
        const user = db.user.findUnique({
            where: { email: email }
        })

        return user
    } catch (error) {
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        const user = db.user.findUnique({
            where: { id: id }
        })

        return user
    } catch (error) {
        return null;
    }
}