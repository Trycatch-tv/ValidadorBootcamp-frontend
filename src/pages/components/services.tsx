/* eslint-disable react-refresh/only-export-components */
import shieldTick from '../../assets/icons/shield-tick.svg';
import support from '../../assets/icons/support.svg';
import fastTruck from '../../assets/icons/fast-truck.svg';
import ServiceCard from './serviceCard';
import { Heading } from "@/components/ui/Heading";

export const data = [
  {
    imgURL: fastTruck,
    label: 'Plan gratuito',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    imgURL: shieldTick,
    label: 'Pago seguro',
    subtext:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    imgURL: support,
    label: 'Nos encanta ayudarte',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const Services = () => {
    return (
      <div className="text-center mx-24 mt-16 pb-5">
        <Heading
            title="Ventajas sobre otras apps" text={''}        />
    <section className='max-container flex justify-center pt-7 flex-wrap gap-9'>
      {data.map((data) => (
        <ServiceCard imgUrl={data.imgURL} key={data.label} {...data} />
      ))}
    </section>
    </div>
  )
}

export default Services;

