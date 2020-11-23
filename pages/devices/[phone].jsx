import Info from '../../components/Info/Info';

export default function Phone({ phone }) {
    return <Info phone={phone} />;
}

export async function getServerSideProps(ctx) {
    const { query } = ctx;
    const response = await fetch('http://localhost:3000/api/devices/' + query.phone);
    const phone = await response.json();
    return { props: { phone } };
}
