import './skeleton.css'

const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }} className={classes}>
            <div className='shimmer-wrapper'>
                <div className="shimmer"></div>
            </div>
        </div>
    )
}

export default SkeletonElement
