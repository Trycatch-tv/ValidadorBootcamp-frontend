import React, { useState, useEffect } from 'react';
import ListRankingContainer from './ListRanking';
import RankingForm from './RankingForm';
import { getRankings, createRanking, updateRanking, deleteRanking } from 'api/rankings';

const RankingBackofficeContainer = () => {
  const [rankings, setRankings] = useState<RankingData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const rankingsData = await getRankings();
      setRankings(rankingsData);
    };
    fetchData();
  }, []);

  const handleCreateRanking = async (rankingData: RankingData) => {
    const newRanking = await createRanking(rankingData);
    setRankings([...rankings, newRanking]);
  };

  const handleUpdateRanking = async (rankingId: string, updatedData: RankingData) => {
    const updatedRanking = await updateRanking(rankingId, updatedData);
    const updatedRankings = rankings.map((ranking) =>
      ranking.id === rankingId ? updatedRanking : ranking
    );
    setRankings(updatedRankings);
  };

  const handleDeleteRanking = async (rankingId: string) => {
    await deleteRanking(rankingId);
    const updatedRankings = rankings.filter((ranking) => ranking.id !== rankingId);
    setRankings(updatedRankings);
  };

  return (
    <div>
      <ListRankingContainer rankings={rankings} onDelete={handleDeleteRanking} />
      <RankingForm onCreate={handleCreateRanking} onUpdate={handleUpdateRanking} />
    </div>
  );
};

export default RankingBackofficeContainer;