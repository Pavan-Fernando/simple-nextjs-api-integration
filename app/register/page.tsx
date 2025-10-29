// "use client";
//
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
//
// const schema = z.object({
//     name: z.string().min(3, "Name must be at least 3 characters"),
//     email: z.string().email("Invalid email format"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string(),
//     phone: z.string().optional(),
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords must match",
//     path: ["confirmPassword"],
// });
//
// type FormData = z.infer<typeof schema>;
//
// export default function RegisterPage() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm<FormData>({ resolver: zodResolver(schema) });
//
//     const onSubmit = (data: FormData) => {
//         console.log("✅ Form Data:", data);
//         alert("Registration Successful!");
//     };
//
//     return (
//         <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
//             <h1 className="text-xl font-bold mb-4">Register</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <input
//                         {...register("name")}
//                         placeholder="Full Name"
//                         className="w-full border p-2 rounded"
//                     />
//                     {errors.name && (
//                         <p className="text-red-500 text-sm">{errors.name.message}</p>
//                     )}
//                 </div>
//
//                 <div>
//                     <input
//                         {...register("email")}
//                         placeholder="Email"
//                         className="w-full border p-2 rounded"
//                     />
//                     {errors.email && (
//                         <p className="text-red-500 text-sm">{errors.email.message}</p>
//                     )}
//                 </div>
//
//                 <div>
//                     <input
//                         type="password"
//                         {...register("password")}
//                         placeholder="Password"
//                         className="w-full border p-2 rounded"
//                     />
//                     {errors.password && (
//                         <p className="text-red-500 text-sm">{errors.password.message}</p>
//                     )}
//                 </div>
//
//                 <div>
//                     <input
//                         type="password"
//                         {...register("confirmPassword")}
//                         placeholder="Confirm Password"
//                         className="w-full border p-2 rounded"
//                     />
//                     {errors.confirmPassword && (
//                         <p className="text-red-500 text-sm">
//                             {errors.confirmPassword.message}
//                         </p>
//                     )}
//                 </div>
//
//                 <div>
//                     <input
//                         {...register("phone")}
//                         placeholder="Phone (Optional)"
//                         className="w-full border p-2 rounded"
//                     />
//                     {errors.phone && (
//                         <p className="text-red-500 text-sm">{errors.phone.message}</p>
//                     )}
//                 </div>
//
//                 <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//                 >
//                     {isSubmitting ? "Submitting..." : "Register"}
//                 </button>
//             </form>
//         </div>
//     );
// }


"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    phone: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = async (data: FormData) => {
        try {
            console.log("✅ Form Data:", data);
            // toast.success("Registration Successful! 🎉");
            toast.success("User created!", {
                duration: 3000,
                position: "bottom-center",
                style: {
                    background: "#333",
                    color: "#fff",
                },
            });

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full p-6 border rounded-xl shadow bg-yellow-700">
                <h1 className="text-xl font-bold mb-4">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            {...register("name")}
                            placeholder="Full Name"
                            className="w-full border p-2 rounded"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="w-full border p-2 rounded"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Password"
                            className="w-full border p-2 rounded"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            placeholder="Confirm Password"
                            className="w-full border p-2 rounded"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("phone")}
                            placeholder="Phone (Optional)"
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

