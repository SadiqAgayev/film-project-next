import { BiLoaderCircle } from "react-icons/bi";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%'
    }}>
        <BiLoaderCircle size={100} />
    </div>
  }