import React from "react";

class SideBar extends React.Component{
    render() {
        return(
            <aside className={"aside-cars"}>
                <article className={"aside-cars-content"}>
                    <a href={"#"}><p>Toyota Camry</p></a>
                    <a href={"#"}><p>BMW M5</p></a>
                    <a href={"#"}><p>Mercedes CLS</p></a>
                    <a href={"#"}><p>ВАЗ-2007</p></a>
                </article>
            </aside>
        )
    }
}

export default SideBar