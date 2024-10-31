import Author from "./Author";
import { AuthorInfo } from "./types";
import Department from "./Department";
import { DepartmentInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Seong Hyeon Park",
    ref: '1'
  },
  {
    name: "Huiwon Jang",
    ref: '1'
  },
  {
    name: "Byungwoo Jeon",
    ref: '1'
  }
];

const authors2: AuthorInfo[] = [
  {
    name: "Sukmin Yun",
    ref: '2'
  },
  {
    name: "Paul Hongsuck Seo",
    ref: '3'
  },
  {
    name: "Jinwoo Shin",
    ref: '1'
  }
];

const departments: DepartmentInfo[] = [
  {
    name: "KAIST",
    ref: '1'
  },
  {
    name: "Hanyang University ERICA",
    ref: '2'
  },
  {
    name: "Korea University",
    ref: '3'
  }
];

const Organization = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Author authors={authors} />
        <Author authors={authors2} />
        <Department departments={departments} />
      </div>
    </div>
  );
};

export default Organization;
