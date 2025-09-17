


function App() {
  //Su dung call back
  // setTimeout(() => {
  //   console.log("Nhat rau");
  //   setTimeout(() => {
  //     console.log("Rua rau");
  //     setTimeout(() => {
  //       console.log("Nau");
  //     }, 2000)
  //   }, 1000)
  // }, 3000)

  //Su dung promise
  // let job = new Promise((resolve) => {
  //   setTimeout(resolve, 3000)
  // }).then(() => {
  //   console.log("Nhat rau");
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, 1000)
  //   })
  // }).then(() => {
  //   console.log("Rua rau");
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, 2000)
  //   })
  // }).then(() => {
  //   console.log("Nau");
  // })

  //Su dung async await
  async function job() {
    await new Promise((resolve) => { setTimeout(resolve, 3000) })
    console.log("Nhat rau");
    await new Promise((resolve) => { setTimeout(resolve, 1000) })
    console.log("Rua rau");
    await new Promise((resolve) => { setTimeout(resolve, 2000) })
    console.log("Nau");
  }
  job()
  return (
    <div>App</div>
  )
}

export default App