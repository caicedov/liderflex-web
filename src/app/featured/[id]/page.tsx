function FeaturedDetailContent({ params }: {
    params: { id: string }
}) {
    return <div>FeaturedDetailContent</div>;
}

export default function FeaturedDetailPage({
    params,
}: {
    params: { id: string }
}) {
    return <FeaturedDetailContent params={params} />;
}