/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { FC } from "react"
import { Link } from "react-router-dom"
import Layout from "@/layout/Layout"

interface Ranking {
  bootcamp_id: string;
  bootcamp_name: string;
  location: string;
  modality: string;
  scores: {
    overall: number;
    curriculum: number;
    job_support: number;
  };
  reviews_count: number;
  ranking: {
    overall_rank: number;
    curriculum_rank: number;
    job_support_rank: number;
  };
}


// Define the structure of your API interaction functions
// You'll need to implement these functions or import them if they already exist
const getRankings = async (rankingsData?: Ranking[]): Promise<Ranking[]> => {
  // Implement the API call to fetch rankings
  throw new Error('getRankings function is not implemented.');
};

const createRanking = async (rankingData: Ranking): Promise<Ranking> => {
  // Implement the API call to create a new ranking
  throw new Error('createRanking function is not implemented.');
};

const updateRanking = async (rankingId: string, updatedData: Ranking): Promise<Ranking> => {
  // Implement the API call to update an existing ranking
  throw new Error('updateRanking function is not implemented.');
};

const deleteRanking = async (rankingId: string): Promise<void> => {
  // Implement the API call to delete a ranking
  throw new Error('deleteRanking function is not implemented.');
};


const RankingBackofficeContainer = () => {
  const [rankings, setRankings] = useState<Ranking[]>([
    {
      "bootcamp_id": "dd411f58-caf1-4441-a807-252fdfad6596",
      "bootcamp_name": "CodeMaster Bootcamp",
      "location": "San Francisco, CA",
      "modality": "Online",
      "scores": {
        "overall": 4.8,
        "curriculum": 4.7,
        "job_support": 4.9
      },
      "reviews_count": 120,
      "ranking": {
        "overall_rank": 2,
        "curriculum_rank": 3,
        "job_support_rank": 1
      }
    },
    {
      "bootcamp_id": "bb230fe2-48e1-11ec-bf63-0242ac130002",
      "bootcamp_name": "DevBuilders Workshop",
      "location": "New York, NY",
      "modality": "In-person",
      "scores": {
        "overall": 4.6,
        "curriculum": 4.8,
        "job_support": 4.5
      },
      "reviews_count": 95,
      "ranking": {
        "overall_rank": 3,
        "curriculum_rank": 2,
        "job_support_rank": 4
      }
    },
    {
      "bootcamp_id": "cc340fe3-48e1-11ec-bf63-0242ac130003",
      "bootcamp_name": "TechTonic Shift Academy",
      "location": "Austin, TX",
      "modality": "Hybrid",
      "scores": {
        "overall": 4.9,
        "curriculum": 4.9,
        "job_support": 5.0
      },
      "reviews_count": 110,
      "ranking": {
        "overall_rank": 1,
        "curriculum_rank": 1,
        "job_support_rank": 2
      }
    },
    {
      "bootcamp_id": "dd450fe4-48e1-11ec-bf63-0242ac130004",
      "bootcamp_name": "CodeCrafters Institute",
      "location": "Seattle, WA",
      "modality": "Online",
      "scores": {
        "overall": 4.5,
        "curriculum": 4.4,
        "job_support": 4.6
      },
      "reviews_count": 80,
      "ranking": {
        "overall_rank": 5,
        "curriculum_rank": 5,
        "job_support_rank": 3
      }
    },
    {
      "bootcamp_id": "ee560fe5-48e1-11ec-bf63-0242ac130005",
      "bootcamp_name": "FullStack Labs",
      "location": "Chicago, IL",
      "modality": "In-person",
      "scores": {
        "overall": 4.7,
        "curriculum": 4.6,
        "job_support": 4.7
      },
      "reviews_count": 100,
      "ranking": {
        "overall_rank": 4,
        "curriculum_rank": 4,
        "job_support_rank": 5
      }
    },
    {
      "bootcamp_id": "ff670fe6-48e1-11ec-bf63-0242ac130006",
      "bootcamp_name": "Innovate Tech Academy",
      "location": "Boston, MA",
      "modality": "Online",
      "scores": {
        "overall": 4.4,
        "curriculum": 4.3,
        "job_support": 4.2
      },
      "reviews_count": 70,
      "ranking": {
        "overall_rank": 6,
        "curriculum_rank": 6,
        "job_support_rank": 6
      }
    }
  ]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const rankingsData = await getRankings();
      setRankings(rankingsData);
    } catch (error) {
      console.error('Error fetching rankings:', error);
    }
  };
  fetchData();
}, []);


// ... (handleCreateRanking, handleUpdateRanking, handleDeleteRanking functions)

const handleCreateRanking = async (rankingData: Ranking) => {
  try {
    const newRanking = await createRanking(rankingData);
    setRankings(prevRankings => [...prevRankings, newRanking]);
  } catch (error) {
    console.error('Error creating ranking:', error);
  }
};

const handleUpdateRanking = async (rankingId: string, updatedData: Ranking) => {
  try {
    const updatedRanking = await updateRanking(rankingId, updatedData);
    setRankings(prevRankings =>
      prevRankings.map(ranking => 
        ranking.bootcamp_id === rankingId ? updatedRanking : ranking
      )
    );
  } catch (error) {
    console.error('Error updating ranking:', error);
  }
};

const handleDeleteRanking = async (rankingId: string) => {
  try {
    await deleteRanking(rankingId);
    setRankings(prevRankings => 
      prevRankings.filter(ranking => ranking.bootcamp_id !== rankingId)
    );
  } catch (error) {
    console.error('Error deleting ranking:', error);
  }
};

  return (
    <Layout>
      {/* Ranking */}
      <div>
        <div>
          <h3 className="font-semibold text-lg">Backoffice Ranking</h3>
        </div>
        <div className="mt-4">
          <Table className="table table-bordered table-striped">
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Modalidad</TableHead>
                <TableHead>Puntuación General</TableHead>
                <TableHead>Acciones</TableHead> {/* Assuming you want to perform actions like edit/delete */}
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
          <TableBody>
            {rankings.map((ranking, index) => (
          <TableRow key={ranking.bootcamp_id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{ranking.bootcamp_name}</TableCell>
          <TableCell>{ranking.location}</TableCell>
          <TableCell>{ranking.modality}</TableCell>
          <TableCell>{ranking.scores.overall}</TableCell>
          <TableCell>
            <Link to={`/admin/ranking/${ranking.bootcamp_id}`}>
              <Button size={"sm"} className="text-xs">Administrar</Button>
            </Link>
          </TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  <div>
  </div>
</div>
  </Layout>
  )
}


export default RankingBackofficeContainer;