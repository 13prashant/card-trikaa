import SkeletonElement from './SkeletonElement'

const SkeletonCard = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-card">
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <SkeletonElement type='thumbnail' />
                </div>
                <SkeletonElement type='title' />
                <div>
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <SkeletonElement type='circle' />
                    <SkeletonElement type='circle' />
                    <SkeletonElement type='circle' />
                    <SkeletonElement type='circle' />
                </div>
                <div>
                    <SkeletonElement type='half-text' />
                    <SkeletonElement type='half-text' />
                    <SkeletonElement type='half-text' />
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard
