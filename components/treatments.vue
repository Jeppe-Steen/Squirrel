<template>
    <section class="treatments__main">
        <h2>Her kan du se mere om hvad jeg tilbyder af behandlinger</h2>
        <div class="treatments__container">
            <ul class="left">
                <li>Nåleakupunktur</li>
                <li>Moxa/varmene urter</li>
                <li>Auriculoterapi/øre akupunktur</li>
                <li>TENS</li>
                <li>Fire cupping og moving cupping</li>
            </ul>
            <div class="right">
                <div></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.treatments{
    &__main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: white;
        padding: 50px;
        border-radius: 50px;

        h2 {
            margin-bottom: 10px;
            text-transform: uppercase;
        }
    }
    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width:100%;
        grid-template-areas: 'left right';

        .left {
            grid-area: left;
        }

        .right {
            grid-area: right;
        }

        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            li {
                margin: 10px;
                width: fit-content;
                padding: 20px;
                background-color: lightgreen;
                
                list-style: none;
            }
        }
    }

}
</style>