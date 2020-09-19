import React, { createContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = (props) => {
  const restaurantInfo = [
    {
      path: "/poznan-taczaka",
      city: "Poznań",
      name: "taczaka",
      street: "Taczaka 11/2, Poznań",
      phone: "61 883 43 15",
      email: "taczaka@baraboo.pl",
      facebook: "https://www.facebook.com/Baraboo.Poznan/",
      instagram: "http://www.instagram.com/baraboo.taczaka/",
      background:
        "http://www.baraboo.pl/web/uploaded_images/gallery/1491742203_914afff89cc32baad9a3e14bd319b2c2.jpg",
      hours: {
        d1: {
          open: "Poniedziałek 10-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
        d2: {
          open: "Wtorek-Piątek 10-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d3: {
          open: "Sobota 11-1",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 1:00",
        },
        d4: {
          open: "Niedziela 11-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
      },
      cords: {
        lat: 52.406044,
        lng: 16.920455,
      },
    },
    {
      path: "/poznan-malta",
      city: "Poznań",
      name: "malta",
      street: "Jana Pawła II 14, Poznań ",
      phone: "516 894 836",
      email: "malta@baraboo.pl",
      facebook: "http://www.facebook.com/baraboo.malta",
      instagram: "http://www.instagram.com/baraboo.malta",
      background:
        "https://media-cdn.tripadvisor.com/media/photo-s/0d/a6/18/f7/our-restaurant.jpg",
      hours: {
        d1: {
          open: "Poniedziałek 10-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
        d2: {
          open: "Wtorek-Piątek 10-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d3: {
          open: "Sobota 11-1",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 1:00",
        },
        d4: {
          open: "Niedziela 11-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
      },
      cords: {
        lat: 52.404433,
        lng: 16.953519,
      },
    },
    {
      path: "/poznan-stary-rynek",
      city: "Poznań",
      name: "stary rynek",
      street: "Gołębia 6, Poznań",
      phone: "61 278 71 73",
      email: "golebia@baraboo.pl",
      facebook: "http://www.facebook.com/baraboo.staryrynek.poznan",
      instagram: "http://www.instagram.com/baraboo.rynek/",
      background:
        "http://www.baraboo.pl/web/uploaded_images/gallery/1491751662_938a86787b8c49e338fcc0326fe594b3.jpg",
      hours: {
        d1: {
          open: "Poniedziałek 12-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
        d2: {
          open: "Wtorek-Piątek 12-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d3: {
          open: "Sobota 12-1",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 1:00",
        },
        d4: {
          open: "Niedziela 12-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
      },
      cords: {
        lat: 52.406665,
        lng: 16.933652,
      },
    },
    {
      path: "/lublin-narutowicza",
      city: "Lublin",
      name: "narutowicza",
      street: "Narutowicza 9, Lublin",
      phone: "81 516 39 25",
      email: "baraboo.lublin@gmail.com",
      facebook: "https://www.facebook.com/Baraboo.Lublin/",
      instagram: "https://www.instagram.com/baraboo.lublin",
      background:
        "http://www.baraboo.pl/web/uploaded_images/gallery/1548769582_240d73de3dcf081370cc08229a55db2e.jpeg",
      hours: {
        d1: {
          open: "Poniedziałek 10-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
        d2: {
          open: "Wtorek-Piątek 10-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d3: {
          open: "Sobota 11-1",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 1:00",
        },
        d4: {
          open: "Niedziela 11-23",
          kitchen: "kuchnia do 22:00",
          pizza: "pizza do 23:00",
        },
      },
      cords: {
        lat: 51.2473,
        lng: 22.563499,
      },
    },
    {
      path: "/katowice-mariacka",
      city: "Katowice",
      name: "mariacka",
      street: "Mariacka 37, Katowice",
      phone: "32 399 15 26",
      email: "mariacka@baraboo.pl",
      facebook: "http://www.facebook.com/baraboo.katowice",
      instagram: "http://www.instagram.com/baraboo.kato",
      background:
        "http://www.baraboo.pl/web/uploaded_images/gallery/1491751947_b1ab618ca1d3445190b2455955dd4621.jpg",
      hours: {
        d1: {
          open: "Poniedziałek 11-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d2: {
          open: "Wtorek-Środa 11-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d3: {
          open: "Czwartek-Sobota 11-1",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
        d4: {
          open: "Niedziela 11-24",
          kitchen: "kuchnia do 23:00",
          pizza: "pizza do 24:00",
        },
      },
      cords: {
        lat: 50.257067,
        lng: 19.02926,
      },
    },
  ];

  return (
    <RestaurantContext.Provider value={restaurantInfo}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
