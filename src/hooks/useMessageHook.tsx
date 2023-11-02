import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MessageType } from '../Interface'
import { useReCaptcha } from './useContext'

export function useSentMessage () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const {  isCaptchaVerified } =
        useReCaptcha() || {};
  const [contactInfo, setContactInfo] = useState<MessageType>({
    name: '',
    email: '',
    phone: '',
    comment: '',
  })
  const notify = () => toast.success('Your messages have been sent successfully.')
  // sent message from handler
  const handleContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload:MessageType = {
      name: contactInfo.name,
      phone: contactInfo.phone,
      text: contactInfo.comment,
      website: 'kmcargo.com.my',
    }
    if (contactInfo?.email !== '') {
      payload.email = contactInfo.email
    }
    if(isCaptchaVerified){
      setError("")
      if (contactInfo.name !== '' && contactInfo.phone !== '' && contactInfo.comment !== '') {
        setLoading(true)
        try {
          axios.post('https://api2.kmexpress.com.bd/api/massage-public/', payload).then(res => {
            if (res?.data?.success) {
              setLoading(false)
              notify()
              // clear the state
              contactInfo.name = ''
              contactInfo.email = ''
              contactInfo.comment = ''
              contactInfo.phone = ''
              setTimeout(() => {
                navigate('/')
              }, 1000)
            }
          })
        } catch (error) {
          // setLoading(false)
          console.log(error)
        }
      }
    }else{
      setError("Captcha is Required!")
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
  }
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactInfo({ ...contactInfo, comment: e.target.value })
  }
  // console.log(contactInfo)
  return { handleContactForm, handleChange, handleTextareaChange, ToastContainer, contactInfo, loading, error }
}
