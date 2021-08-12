import { User } from "../interfaces/interfac";

const me: User[] = [
  {
    username: "tushar",
    password: "xyz0",
  },
  {
    username: "ashish",
    password: "xyz1",
  },
  {
    username: "sanchan",
    password: "xyz2",
  },
  {
    username: "yuvi",
    password: "xyz3",
  },
];
export default me;

// Example Structure to define Interface for Array of Objects
//  interface EnumServiceItem {
//   id: number; label: string; key: any
// }

// // interface EnumServiceItems extends Array<EnumServiceItem>{}

// // Option A
// var result: EnumServiceItem[] = [
//   { id: 0, label: 'CId', key: 'contentId' },
//   { id: 1, label: 'Modified By', key: 'modifiedBy' },
//   { id: 2, label: 'Modified Date', key: 'modified' },
//   { id: 3, label: 'Status', key: 'contentStatusId' },
//   { id: 4, label: 'Status > Type', key: ['contentStatusId', 'contentTypeId'] },
//   { id: 5, label: 'Title', key: 'title' },
//   { id: 6, label: 'Type', key: 'contentTypeId' },
//   { id: 7, label: 'Type > Status', key: ['contentTypeId', 'contentStatusId'] }
// ];
// export default result;
