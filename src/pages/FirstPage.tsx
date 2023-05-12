import Content from "../components/Content";
import Header from "../components/Header";

const FirstPage = () => {
    return (
        <div className="flex flex-col bg-main bg-no-repeat bg-cover h-screen  ">
            <Header />
            <Content />
        </div>
    );
};

export default FirstPage;
