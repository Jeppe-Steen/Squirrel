<script></script>

<template>
    <section class="reviews">
        <h2>Hvad siger tidligere klienter?</h2>
        <div class="reviews__container">
            <article class="review">
                <p>"Jeg har fået 5 behandlinger hos Frederikke. Det er et godt sted at komme, rolige lokaler og omgivelser. Frederikke har behandlet muskler og ar i mit lår efter et brækket lårben og 2 operationer. Selv om jeg var skeptisk, har det gjort en forskel, og kan virkelig anbefales."</p>
                <span>- Per</span>
            </article>
            
            <article class="review">
                <p>"Jeg kontaktede Frederikke på baggrund af vores 16 årige datter Celina. Celina har skoliose, som blev "opdaget" for ca 3 år siden. Hun er efterskole elev og målvogter i håndbold på et ganske ok niveau.  Celina har det sidste halve år været præget af smerter i sin venstre lænd/ nedre ryg samt venstre ben ..."</p>
                
                <button class="read-more">Læs den fulde anmeldelse her</button>
                <span>- Celina og Anne-Marie</span>
            </article>
        </div>

        </section>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

    .reviews {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px 0; 

        &__container {
            display: flex;
            flex-direction: row;
            padding: 20px 0;
            gap: 20px;

            .review {
                width: 50%;
                display: flex;
                flex-direction: column;
                background-color: white;
                box-shadow: 0 0 10px 5px #00000030;
                padding: 20px;
                height: fit-content;

                button {
                    padding: 10px;
                    margin: 10px 0;
                    background-color: $lightGreen;
                    border: none;
                    
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>