import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const cars=ref([])

  const SET_CARS = (newCars) => {
    cars.value = newCars;
  }

  const fetchCars = async () => {
    const mockCars = [
      {
        id: 1,
        model: 'Audi A8',
        type: 'New',
        year: 2023,
        fuel: 'Petrol',
        price: 36620,
        image: '/assets/images/1.jpg',
        performance: "0-60 mph in 5.6 seconds, Top Speed 155mph",
        dimensions: "Length: 5.3m, Width: 1.95m, Height:1.47m",
        seating: 5,
        safety: 'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: true,
          branch2: false,
          branch3: true,
        }
      },
      {
        id: 2,
        model: 'Audi A4',
        type: 'New',
        year: 2022,
        fuel: 'Electric',
        price: 88620,
        image: '/assets/images/2.jpg',
        performance: "0-60 mph in 4.2 seconds, Top Speed 185mph",
        dimensions: "Length: 5.7m, Width: 1.95m, Height:1.47m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: true,
          branch2: false,
          branch3: true,
        }
      },
      {
        id: 3,
        model: 'Audi Q7',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 77560,
        image: '/assets/images/3.jpg',
        performance: "0-60 mph in 3.6 seconds, Top Speed 195mph",
        dimensions: "Length: 5.3m, Width: 1.95m, Height:1.47m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: true,
          branch2: false,
          branch3: false,
        }
      },    {
        id: 4,
        model: 'Audi A1',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 112680,
        image: '/assets/images/4.jpg',
        performance: "0-60 mph in 5.5 seconds, Top Speed 145mph",
        dimensions: "Length: 5.3m, Width: 1.95m, Height:1.47m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: true,
          branch2: false,
          branch3: true,
        }
      },    {
        id: 5,
        model: 'Audi A2',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 66428,
        image: '/assets/images/5.jpg',
        performance: "0-60 mph in 5.9 seconds, Top Speed 190mph",
        dimensions: "Length: 5.14m, Width: 1.65m, Height:1.87m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: false,
          branch2: true,
          branch3: true,
        }
      },    {
        id: 6,
        model: 'Audi A3',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 44678,
        image: '/assets/images/6.jpg',
        performance: "0-60 mph in 5.2 seconds, Top Speed 225mph",
        dimensions: "Length: 5.3m, Width: 1.95m, Height:1.43m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: true,
          branch2: false,
          branch3: false,
        }
      },    {
        id: 7,
        model: 'Audi A5',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 88462,
        image: '/assets/images/7.jpg',
        performance: "0-60 mph in 5.6 seconds, Top Speed 210mph",
        dimensions: "Length: 5.11m, Width: 1.77m, Height:1.47m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: false,
          branch2: false,
          branch3: true,
        }
      },    {
        id: 8,
        model: 'Audi A6',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 95382,
        image: '/assets/images/8.jpg',
        performance: "0-60 mph in 5.6 seconds, Top Speed 255mph",
        dimensions: "Length: 5.2m, Width: 1.85m, Height:1.47m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: false,
          branch2: true,
          branch3: false,
        }
      },    {
        id: 9,
        model: 'Audi A7',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 85372,
        image: '/assets/images/9.jpg',
        performance: "0-60 mph in 5.6 seconds, Top Speed 270mph",
        dimensions: "Length: 5.2m, Width: 1.95m, Height:1.47m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: false,
          branch2: true,
          branch3: true,
        }
      },    {
        id: 10,
        model: 'Audi R8',
        type: 'New',
        year: 2021,
        fuel: 'Electric',
        price: 130583,
        image: '/assets/images/10.jpg',
        performance: "0-60 mph in 2.6 seconds, Top Speed 300mph",
        dimensions: "Length: 5.7m, Width: 1.75m, Height:1.77m",
        seating: 5,
        safety:'Airbags, ABS, Lane Assists, Collision Detection',
        stock: {
          branch1: true,
          branch2: true,
          branch3: false,
        }
      },
      // Add more cars as needed
    ];

    SET_CARS(mockCars);
  }

  return {
    cars,
    SET_CARS,
    fetchCars,
  }
})