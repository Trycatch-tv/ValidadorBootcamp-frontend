interface imgURLProps {
  imgUrl: string;
  label: string;
  subtext: string;
}

const ServiceCard: React.FC<imgURLProps> = ({ imgUrl, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] bg-gray-100 shadow-3xl px-10 py-16 hover:scale-105 transition-transform'>
      <div className='w-11 h-11 flex justify-center items-center bg-gray-200 rounded-full'>
        <img src={imgUrl} alt={label} width={76} height={76} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard;