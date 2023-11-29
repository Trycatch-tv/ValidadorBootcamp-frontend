import { Button, Input } from '@/components/ui'
import { Eye, EyeOff } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  showPassword: boolean
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  confirmPassword: boolean
  setConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupView: FC<Props> = ({showPassword,setShowPassword,confirmPassword,setConfirmPassword}) => {
  return (
    <section>
            <div className='container container-lg pt-16 pb-4  w-full mx-auto flex justify-center min-h-screen'>
                {/* container form para del login */}
                <div className=' flex-col flex items-center justify-center'>
                    <div className='w-full'>
                        <div className='mb-10'>
                            <h2 className='text-4xl font-semibold max-w-md'> Registrate </h2>
                        </div>
                        <form className='min-w-[350px]  max-w-md  w-full'>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Nombre</label>
                                <Input type="email" placeholder="Enter your name" />
                            </div>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Apellido</label>
                                <Input type="email" placeholder=" Enter your last name" />
                            </div>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Correo</label>
                                <Input type="email" placeholder="Enter your email" />
                            </div>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Contraseña</label>
                                <div className='flex border rounded-md items-center px-3'>
                                    <Input name='password' className='border-none px-0' type={ showPassword ? "text" :"password"} placeholder="Enter your password" />
                                    {
                                        showPassword ? (
                                            <Eye onClick={() => setShowPassword(!showPassword)} className='h-4 text-gray-500 cursor-pointer'/>
                                        ):(
                                            <EyeOff onClick={()=>setShowPassword(!showPassword)} className='h-4 text-gray-500 cursor-pointer'/>
                                        )
                                    } 
                                </div>
                            </div>
                            <div className='my-5'>
                                <label className='text-gray-700 text-xs font-semibold block my-1'>Confirmar contraseña</label>
                                <div className='flex border rounded-md items-center px-3'>
                                    <Input name='confirmPassword' className='border-none px-0' type={ confirmPassword ? "text" :"password"} placeholder=" Enter your password" />
                                    {
                                        confirmPassword ? (
                                            <Eye onClick={() => setConfirmPassword(!confirmPassword)} className='h-4 text-gray-500 cursor-pointer'/>
                                        ):(
                                            <EyeOff onClick={()=>setConfirmPassword(!confirmPassword)} className='h-4 text-gray-500 cursor-pointer'/>
                                        )
                                    } 
                                </div>
                            </div>
                            <div className='my-5'>
                                <Button className='w-full' >Inicia sesión</Button>
                            </div>
                            <div className='flex items-center justify-center gap-4 my-5'>
                                <span className='h-[2px] w-full bg-gray-200 my-1' />
                                <p className='text-gray-400 text-xs'>O</p>
                                <span className='h-[2px] w-full bg-gray-200 my-1' />
                            </div>
                            <Button className='w-full' variant={"outline"}>Continua con Google</Button>
                            <p className='text-xs mt-10 text-center'>Ya tienes una cuenta? <Link className='text-blue-500' to='/signin'>Inicia sesion</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SignupView
