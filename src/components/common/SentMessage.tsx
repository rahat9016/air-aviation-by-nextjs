import { useReCaptcha } from '../../hooks/useContext';
import { useSentMessage } from '../../hooks/useMessageHook'
import { Button } from './Button'
import ReCAPTCHA from 'react-google-recaptcha'
const SECRET_API = import.meta.env.VITE_APP_SECRET_CAPTCHA 
export function SentMessage () {
  const { handleChange, handleContactForm, handleTextareaChange, contactInfo } = useSentMessage()
  const { verifyCaptcha, isCaptchaVerified, resetReCaptcha } = useReCaptcha() || {};

  return (
    <form onSubmit={handleContactForm} className='flex flex-col'>
      <input type='text' placeholder='Name' name='name' className='outline-none border border-primary px-5 py-2 w-full rounded-xl mb-3' onChange={handleChange} required value={contactInfo.name} />
      <input type='email' placeholder='E-mail' name='email' className='outline-none border border-primary px-5 py-2 w-full rounded-xl mb-3' onChange={handleChange} value={contactInfo?.email} />
      <input type='number' placeholder='Phone' name='phone' className='outline-none border border-primary px-5 py-2 w-full rounded-xl mb-3 remove-arrow' onChange={handleChange} required value={contactInfo.phone} />
      <textarea onChange={handleTextareaChange} placeholder='Comments' className='outline-none border border-primary px-5 py-2 w-full rounded-xl mb-3 h-[160px] lg:h-[180px] xl:-h-[280px]' rows={10} name='comment' required value={contactInfo.comment} />
      {
        (contactInfo?.name && contactInfo?.phone && contactInfo.comment )  ? <ReCAPTCHA
        sitekey={SECRET_API}
        onChange={verifyCaptcha}
        onExpired={resetReCaptcha}
      /> : ""
      }
     
      <Button className='bg-primary text-white px-3 py-2 font-poppins font-light text-base rounded-xl self-end lg:self-start mt-3 disabled:opacity-75 disabled:cursor-no-drop' type='submit' disabled={!isCaptchaVerified}>Submit</Button>
    </form>
  )
}
