"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const testimonals = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the best application I have used!"
    },
    {
        name: "Sara",
        avatar: "A",
        title: "Designer",
        description: "Really love the image generated!"
    },
    {
        name: "Joe",
        avatar: "A",
        title: "CEO",
        description: "The content writing tool is amazing!"
    },
    {
        name: "Billy",
        avatar: "A",
        title: "Student",
        description: "The AI code generation helped a lot with my homework!"
    }, 
]

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
        <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
            Testimonials
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {testimonals.map((item) => (
                <Card
                    key={item.description}
                    className="bg-[#192339] border-none text-white"
                >
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent