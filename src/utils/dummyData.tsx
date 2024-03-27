import { Book } from "@/components/logo/Book";
import { Clock } from "@/components/logo/Clock";
import { Salat } from "@/components/logo/Salat";
import { Od } from "@/components/logo/Od";

export const controlCardsData = [
  {
    svg: <Book />,
    title: "Хүргэлтийн төлөв хянах",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: <Clock />,
    title: "Шуурхай хүргэлт",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: <Salat />,
    title: "Эрүүл, баталгаат орц",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: <Book />,
    title: "Хоолны өргөн сонголт",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
];
export const meals = [
  {
    logo: <Od />,
    title: "Хямдралтай",
    title2: "Бүгдийг харах",
    menu: [
      { img: "img", discount: "20%", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", discount: "20%", stitle: "Зайрмаг", price: 4800 },
      { img: "img", discount: "20%", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", discount: "20%", stitle: "Өглөөний хоол", price: 24800 },
    ],
  },
  {
    logo: <Od />,
    title: "Үндсэн хоол",
    title2: "Бүгдийг харах",
    menu: [
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
    ],
  },
  {
    logo: <Od />,
    title: "Салад ба зууш",
    title2: "Бүгдийг харах",
    menu: [
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
    ],
  },
  {
    logo: <Od />,
    title: "Амттан",
    title2: "Бүгдийг харах",
    menu: [
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
      { img: "img", stitle: "Өглөөний хоол", price: 14800 },
    ],
  },
];
