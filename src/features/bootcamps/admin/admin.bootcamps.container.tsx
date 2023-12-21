import React, { useState, useEffect } from 'react';
import ListBootcampContainer from '../list/list.bootcamp.container';
import FormBootcampContainer from '../form/form.bootcamps.container';
import { getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp } from 'api/bootcamps';

interface BootcampData {
  id: string;
  name: string;
  description: string;
  url: string;
  facebook_url: string;
  instagram_url: string;
  is_endorsed: boolean;
  endorsedBy: string;
  is_verified: boolean;
  score: number;
  country_name: string;
  country_iso: string;
  mode: 'virtual' | 'presencial' | 'hibrido';
  email: string;
  phone: string;
  user_id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

const AdminBootcampsContainer = () => {
  const [bootcamps, setBootcamps] = useState<BootcampData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const bootcampsData = await getBootcamps();
      setBootcamps(bootcampsData);
    };
    fetchData();
  }, []);

  const handleCreateBootcamp = async (bootcampData: any) => {
    const newBootcamp = await createBootcamp(bootcampData);
    setBootcamps([...bootcamps, newBootcamp]);
  };

  const handleUpdateBootcamp = async (bootcampId: string, updatedData: any) => {
    const updatedBootcamp = await updateBootcamp(bootcampId, updatedData);
    const updatedBootcamps = bootcamps.map((bootcamp) =>
      bootcamp.id === bootcampId ? updatedBootcamp : bootcamp
    );
    setBootcamps(updatedBootcamps);
  };

  const handleDeleteBootcamp = async (bootcampId: string) => {
    await deleteBootcamp(bootcampId);
    const updatedBootcamps = bootcamps.filter((bootcamp) => bootcamp.id !== bootcampId);
    setBootcamps(updatedBootcamps);
  };

  return (
    <div>
      <ListBootcampContainer bootcamps={bootcamps} onDelete={handleDeleteBootcamp} />
      <FormBootcampContainer onCreate={handleCreateBootcamp} onUpdate={handleUpdateBootcamp} />
    </div>
  );
};

export default AdminBootcampsContainer;