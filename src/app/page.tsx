'use client';
import React from 'react';
import { VictoryPie } from 'victory';

const getFemaleData = async () => {
  const female = await fetch('https://pokeapi.co/api/v2/gender/1', {
    cache: 'no-store',
  });

  return female.json();
};

const getMaleData = async () => {
  const male = await fetch('https://pokeapi.co/api/v2/gender/2', {
    cache: 'no-store',
  });

  return male.json();
};

const getGenderlessData = async () => {
  const genderless = await fetch('https://pokeapi.co/api/v2/gender/3', {
    cache: 'no-store',
  });

  return genderless.json();
};

export default async function Home() {
  const femaleArr = await getFemaleData();
  const maleArr = await getMaleData();
  const genderlessArr = await getGenderlessData();

  const femaleQuantity = femaleArr.pokemon_species_details.length;
  const maleQuantity = maleArr.pokemon_species_details.length;
  const genderlessQuantity = genderlessArr.pokemon_species_details.length;

  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between p-10">
        <h1 style={{ fontSize: '50px' }}>Gêneros dos Pokemons</h1>

        <div className="w-6/12">
          <VictoryPie
            colorScale={['pink', 'blue', 'yellow']}
            labelPosition="startAngle"
            data={[
              {
                x: `Female: ${femaleQuantity}`,
                y: femaleQuantity,
              },
              {
                x: `Male: ${maleQuantity}`,
                y: maleQuantity,
              },
              {
                x: `Genderless: ${genderlessQuantity}`,
                y: genderlessQuantity,
              },
            ]}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
