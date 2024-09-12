"use server"
export default async function getServerSideProps(){

    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json", {
        cache: "no-cache"
    });
    const { data } = await response.json();

    const champion = Object.values(data);
    return {
        props: {
            champion
        }
    }
}