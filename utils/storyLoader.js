import path from 'path';
import { promises as fs } from 'fs';
import { faker } from '@faker-js/faker';
import crypto from 'crypto';

let cachedStories = [];

export async function getStories() {
  if (cachedStories.length === 0) {
    const imgPathsArr = await getImagePaths();
    cachedStories = imgPathsArr.map( path => createStory(path) );
    return cachedStories;
  } else {
    return cachedStories;
  }
}

async function getImagePaths(){
  const imgDir = path.join(process.cwd(), "public", "pictures");
  const imgNamePathsArr = await fs.readdir(imgDir);
  const imgPathsArr = imgNamePathsArr.map(fileName => "/pictures/" + fileName);
  return imgPathsArr;
}

function createStory(imgSrc){
  const story = {
    id: crypto.randomUUID().toString(),
    header: faker.word.words( { count: { min: 5, max: 10 }} ),
    imgSrc: imgSrc,
    text: faker.word.words({ count: { min: 100, max: 400 }}),
    author: faker.person.fullName(),
    date: new Date().toLocaleString(),
  };
  return story;

}