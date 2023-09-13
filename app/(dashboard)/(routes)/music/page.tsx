"use client"

import * as z from "zod"
import Heading from '@/components/shared/Heading'
import { MusicIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"
import { useState } from "react"

import axios from "axios"
import Empty from "@/components/shared/Empty"
import Loader from "@/components/shared/Loader"
import { cn } from "@/lib/utils"

import UserAvatar from "@/components/shared/UserAvatar"
import BotAvatar from "@/components/shared/BotAvatar"
import { ChatCompletionRequestMessage } from "openai"

const MusicPage = () => {
    const router = useRouter()
    const [music, setMusic] = useState<string>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined)

            const response = await axios.post("/api/music", values)

            setMusic(response.data.audio)
            form.reset()

        } catch (error: any) {
            //Open throw model 
            console.log(error)
        } finally {
            router.refresh()
        }
    }

  return (
    <section>
        <Heading
            title='Music Generation'
            description='Our most advanced music generation model'
            icon={MusicIcon}
            iconColor="text-emerald-500"
            bgColor="bg-emerald-500/10"
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
                            <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input
                                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                                        disabled={isLoading}
                                        placeholder="Solo Piano"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button 
                        className="col-span-12 lg:col-span-2 w-full"
                        disabled={isLoading}
                    >
                        Generate
                    </Button>
                </form>
                </Form>
            </div>
            <div className="space-y-4 mt-4">
                {isLoading && (
                    <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                        <Loader/>
                    </div>
                )}
                {!music && !isLoading && (
                    <Empty 
                        label="No music generated ..."
                    />
                )}
                {music && (
                    <audio
                        controls
                        className="w-full"
                    >
                        <source src={music}/>
                    </audio>
                )}
            </div>
        </div>
    </section>
  )
}

export default MusicPage 