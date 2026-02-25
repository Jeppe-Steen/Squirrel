<script setup> 
import { modal } from '../composable/model.js';
const { show, showModal } = modal();


</script>

<template>
    <section class="model" v-if="show">
        <article>
            <header>
                <h3>Anmeldelse</h3>
                <h3 @click="showModal(false)">x</h3>
            </header>

            <p>Jeg kontaktede Frederikke på baggrund af vores 16årige datter Celina. Celina har skoliose, som blev "opdaget" for ca 3 år siden. Hun er efterskole elev og målvogter i håndbold på et ganske ok niveau.  Celina har det sidste halve år været præget af smerter i sin venstre lænd/ nedre ryg samt venstre ben. Flere besøg hos Celinas faste fysioterapeut resulterede i, at han via lægen sendte Celina til ekstra MR og CT scanning.</p>
            <p>I memmeltiden havde Celina mødt Frederikke første gang. Af Frederikke blev vi allerede via beskeder imødekommet på en positiv og varm måde, som gjorde, at både Celina og vi som forældre følte os trygge. Dette blev vi blot bekræftet i ved det første møde. Frederikke formåede at skabe en rigtig dejlig atmosfære, hvor Celina følte sig i centrum og hørt. </p>
            <p>MR og CT scanning vidste, at Celina havde en diskusprolaps i venstre side. Sundhedsvæsenet i Nordjylland er ikke gearet til, at en 16årig får diskusprolaps. Celina blev derfor i en periode på mere end 4 uger afvist flere steder på diverse sygehus grundet sin alder og at det ikke var en diskusprolaps forudsaget af gigt eller lign. </p>
            <p>Forløbet hos Frederikke var med til, at Celina i en rigtig træls periode oplevede at være i centrum og blive hørt og kunne koble af under behandlingerne. Smerterne var i dagene efter besøgene aftagende af større eller mindre grad. Frederikke var undervejs rigtig dygtig til at skabe rum og var lydhør over for, hvordan Celina tog imod behandlingen og justerede ved behov. </p>
            <p>Frederikke vil vi helt sikkert besøge igen og vores største anbefaling herfra - både som modtager af behandlinger og som forældre. Altid har vi følt os trygge </p>
            <p>De kærligste hilsner, Celina og Anne-Marie</p>
        </article>
    </section>
</template>

<style lang="scss">
    $lightestGreen:#F1F3E0;
    $lightGreen:#D2DCB6;
    $green:#A1BC98;
    $darkGreen:#778873;
    
    .model {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(8px);
        box-shadow: 0 0 10px 5px #00000030;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;

        article {
            width: 50%;
            height: fit-content;
            background-color: $lightGreen;
            padding: 40px;

            header {
                display:flex;
                flex-direction: row;
                justify-content: space-between;

                h3 {
                    font-size:1.5rem;
                    margin-bottom: 20px;
                }
            }
            p:not(:last-child) {
                margin-bottom: 10px;
            }

            p:last-child {
                font-weight: bold;
            }
        }
    }
</style>