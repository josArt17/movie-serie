import getId from "../../utils/getId";
import Search from "../api/search";
import { getUserQuery } from "../../utils/user-search";


const id = getId("id");
const query = getId("query");
const search = new Search(query, id);
search.getData();
getUserQuery();