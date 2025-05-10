import './loading.css';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (

    <div className="loading-container">
      <div className="rocket">🚀</div>
      <div className="smoke"></div>
      <div className="loading-text">Launching...</div>
    </div>
  )
}
