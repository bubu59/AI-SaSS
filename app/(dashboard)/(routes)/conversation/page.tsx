"use client"

import * as z from "zod"
import Heading from '@/components/shared/Heading'
import { MessageSquarePlus } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem } from "@/components/ui/form"

const Conversation = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

  return (
    <section>
        <Heading
            title='Conversation'
            description='Our most advanced conversation model'
            icon={MessageSquarePlus}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
        />
        <div className='px-4 lg:px-4'>
            <div>
                <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                >
                    <FormField
                        name="prompt"
                        render={({ field }) => (
                            <FormItem>
                                
                            </FormItem>
                        )}
                    />
                </form>
                </Form>
            </div>
        </div>
    </section>
  )
}

export default Conversation 