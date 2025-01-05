const CityPage = async ({ params }: {
  params: Promise<{ city: string}>
}) => {
  const city = (await params).city;

  return (
    <div>Hello {city} Page!</div>
  )
}

export default CityPage;