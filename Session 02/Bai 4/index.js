const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

function extractData({data}) {
    let {title, author} = data;
    console.log(title, author);
}

extractData(response);