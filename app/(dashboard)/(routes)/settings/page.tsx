import Heading from '@/components/shared/Heading'
import SubscriptionButton from '@/components/shared/SubscriptionButton'
import { checkSubscription } from '@/lib/subscription'
import { SettingsIcon } from 'lucide-react'
import React from 'react'

const Settings = async () => {
    const isPro = await checkSubscription()

  return (
    <div>
        <Heading
            title='Settings'
            description='Manage Account Settings'
            icon={SettingsIcon}
            bgColor='bg-gray-700/10'
        />
        <div className='px-4 lg:px-8 space-y-4'>
            <div className='text-muted-foreground text-sm'>
                {isPro 
                    ? "You are currently on a pro plan." 
                    : "You are currently on a free plan."
                }
            </div>
            <SubscriptionButton isPro={isPro}/>
        </div>
    </div>
  )
}

export default Settings