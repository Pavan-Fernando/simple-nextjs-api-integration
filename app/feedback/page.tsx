"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast, Toaster } from "react-hot-toast";

interface FeedbackForm {
    name: string;
    email: string;
    message: string;
}

export default function FeedbackPage() {
    const [formData, setFormData] = useState<FeedbackForm>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = (): string | null => {
        if (!formData.name.trim()) return "Name is required";
        if (!formData.email.includes("@")) return "Valid email is required";
        if (formData.message.length < 10)
            return "Message must be at least 10 characters long";
        return null;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validate();
        if (error) {
            toast.error(error);
            return;
        }

        // Simulate API call delay
        await new Promise((res) => setTimeout(res, 1000));
        toast.success("Feedback submitted successfully!");

        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Toaster />
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Feedback Form</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
