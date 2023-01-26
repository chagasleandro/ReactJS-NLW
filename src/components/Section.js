export default function Section(props) {
    return (
        <section>
                <div>
                    <h2>{props.tilte}</h2>
                    <p>{props.title}</p>
                    <ul class="games-list">
                        {props.children}
                    </ul>
                </div>
        </section>
    );
}