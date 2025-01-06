const CityPage = async ({ params }: {
  params: Promise<{ cafe: string}>
}) => {
  const cafe = (await params).cafe;

  return (
    <div>
      Hello {cafe} page!
    </div>
  )
}

export default CityPage;