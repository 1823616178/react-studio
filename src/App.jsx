import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomeLayout} from "@/layout/HomeLayout";
import {Home} from "@/pages/Home/index.jsx";
import {LiteratureIndex} from "@/pages/literature/Index.jsx";
import {LiteratureArticleDetail} from "@/pages/literature/ArticleDetail.jsx";
import {KnowledgeList} from "@/composent/KnowledgeList/KnowledgeList.jsx";
import {KnowledgeIndex} from "@/pages/knowledge/Index.jsx";
import {RelationIndex} from "@/pages/relation/Index.jsx";
import {ChartIndex} from "@/pages/Chart/Index.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/literature' element={<LiteratureIndex></LiteratureIndex>}></Route>
                    <Route path='/article' element={<LiteratureArticleDetail></LiteratureArticleDetail>}></Route>
                    <Route path="/knowledge" element={<KnowledgeIndex/>}></Route>
                    <Route path="/relation_group" element={<RelationIndex/>}></Route>
                    <Route path="/chart" element={<ChartIndex/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}




