import './loading.css';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="h-[50vh] m-auto flex justify-center items-center">
      <div className="loading-container">
        <div className="rocket">🚀</div>
        <div className="smoke"></div>
        <div className="loading-text">Launching...</div>
      </div>
    </section>
  )
}
