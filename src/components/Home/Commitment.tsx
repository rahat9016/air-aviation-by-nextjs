import commitment from "../../assets/our_commitment_bg.png"
import CommentBox from "../common/CommentBox";

const Commitment = () => {
    return (
        <div style={{backgroundImage: `url(${commitment})`}} className="py-11 mt-10 xl:mt-28">
            <div className="container px-mobileContainer xl:px-0">
            <CommentBox title="OUR COMMITMENT" desc="KM Air Aviation has established itself as a beacon of this commitment, providing
unparalleled GSA services that go above and beyond the ordinary. This
dedication is not just a motto; it's a fundamental principle that permeates every
aspect of the company's operations. From safety protocols to customer
satisfaction, KM Air Aviation's commitment to excellence is unwavering. Safety is
paramount in aviation, and KM Air Aviation takes this responsibility seriously." className="text-white"/>
            </div>
        </div>
    );
};

export default Commitment;