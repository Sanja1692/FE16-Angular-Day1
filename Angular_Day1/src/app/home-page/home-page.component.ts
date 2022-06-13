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
  constructor() { }

  ngOnInit(): void {
  }

}