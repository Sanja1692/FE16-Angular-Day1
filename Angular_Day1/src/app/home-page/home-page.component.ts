import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
title: string = "Why We're the Best";
first: string = "Accommondation";
firstP: string = "We offer the first selection of top match hotels anywhere!";
second: string = "Transportation";
secondP: string = "Whether it's about air tickets or shuttle bus, we will set it up!";
third: string = "Seasoned Agents";
thirdP: string = "Combined, the experience our agents have is centuries!";
four: string = "Easy Trip Planning";
fourP: string = "Our travel agents are always ready to plan your project trip!";
natpis: string = "Best Winter Trips";
pics1: string = "https://cdn.pixabay.com/photo/2019/12/06/05/46/alpine-village-4676673_960_720.jpg";
pics2: string = "https://cdn.pixabay.com/photo/2016/02/07/19/48/aurora-1185464_960_720.jpg";
pics3: string = "https://cdn.pixabay.com/photo/2019/09/03/11/15/hiking-trails-4449183_960_720.jpg";
pics4: string = "https://cdn.pixabay.com/photo/2012/03/01/15/58/active-20502_960_720.jpg";
pics5: string = "https://cdn.pixabay.com/photo/2017/08/14/17/32/switzerland-2641252_960_720.jpg";
pics6: string = "https://cdn.pixabay.com/photo/2022/01/10/12/06/hotel-6928165_960_720.jpg";
dest1: string = "Jasna, Slovakia";
dest2: string = "Abisko,Sweden";
dest3: string = "Lapland,Finland";
dest4: string = "Neuschneher, Austria";
dest5: string = "Abisko,Sweden";
dest6: string = "Jasna, Slovakia";
price1: string = "120€/pers";
price2: string = "130€/pers";
price3: string = "140€/pers";
price4: string = "150€/pers";
price5: string = "120€/pers";
price6: string = "125€/pers";


  constructor() { }

  ngOnInit(): void {
  }

}