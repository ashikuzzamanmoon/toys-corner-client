import useTitle from "../../hook/useTitle";


const Blog = () => {
    useTitle('Blogs')
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-12 mb-4">SOME QUESTIONS</h2>
            <div className="border bg-base-200 px-10 py-4 mb-6">
                <h2 className="text-xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="font-semibold">An access token is a token that grants access to a protected resource. When the access token expires, the client can present the refresh token to the authorization server. That server validates the user’s account is still active, that there is still an active session, and any other required logic. The authorization server can then issue a new access token. <br />
                    There are different ways to store access and refresh tokens on the client-side. One option is to store in an httpOnly cookie. And another option is local storage.</p>
            </div>
            <div className="border bg-base-200 px-10 py-4 mb-6">
                <h2 className="text-xl font-bold">Compare SQL and NoSQL databases?</h2>
                <p className="font-semibold">SQL databases are relational databases that use Structured Query Language (SQL) for managing data. They are organized into tables with rows and columns and work best with structured data where relations exist between different entities. It is good for complex queries and aggregations. <br />
                    On the other hand, NoSQL databases are non-relational databases that store data in a manner other than the tabular relations used within SQL databases. They are suitable for structured, semi-structured, and unstructured data and don’t follow a rigid schema but instead have more flexible structures to accommodate their data-types. NoSQL databases can scale horizontally by adding more servers.</p>
            </div>
            <div className="border bg-base-200 px-10 py-4 mb-6">
                <h2 className="text-xl font-bold">What is express js? What is Nest JS?</h2>
                <p className="font-semibold">Express.js and Nest.js are both web application frameworks used for building server-side applications, but they differ in their architectural styles and features. <br />
                    Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the APIs of Node.js web server functionality and adds helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. <br />
                    Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).</p>
            </div>
            <div className="border bg-base-200 px-10 py-4 mb-10">
                <h2 className="text-xl font-bold">What is MongoDB aggregate and how does it work?</h2>
                <p className="font-semibold">MongoDB aggregate is used to process data or records and return a combined output as a result. It groups values from multiple documents together and performs various operations on the grouped data to return a single result as output. The aggregation pipeline allows users to process data from a collection or other source with a sequence of stage-based manipulations. <br />
                    MongoDB aggregate is a powerful framework used for processing and analyzing data in the MongoDB database. It allows you to perform complex data manipulations and transformations, such as filtering, grouping, sorting, joining, and performing calculations on the data. <br />
                    The aggregate framework operates on a collection of documents and uses a pipeline of stages to process the data. Each stage in the pipeline performs a specific operation on the documents and passes the results to the next stage. The stages are executed sequentially, and the output of one stage becomes the input for the next stage.</p>
            </div>
        </div>
    );
};

export default Blog;