import {SupabaseClient} from "@supabase/supabase-js";

export const loginUser = async (supabase: SupabaseClient, email: string, password: string) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        console.log('error signing in', error);
        return error;
    }
    console.log('user signed in', data);
    return data;
}

export const createUser = async (supabase: SupabaseClient, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    if (error) {
        console.log('error', error);
        return error;
    }
    console.log('user created! data: ', data);
    return data;
}

export const refreshToken = async (supabase: SupabaseClient, refresh_token: string) => {
    const {data, error} = await supabase.auth.refreshSession({refresh_token});
    const {session, user} = data;
    if(error) {
        return (error);
    }
    return {email: user?.email, refresh_token: session?.refresh_token, access_token: session?.access_token};
}

export const getUser = async (supabase: SupabaseClient, jwt: string) => {
    const {data: {user} } = await supabase.auth.getUser(jwt);
    return user;
}