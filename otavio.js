function skills() {
    return {
        html: null,
        percentage(language) {
            // calculate percent
            //const a = 1;
            //const text = `Hello ${a} world`;
            //const text2 = 'hello ' + a + ' world';

            if (!language) return 0;
            console.log('Language: ', language);
            return (hours / 360) * 100;
            return 10;
        },
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/otaviofurtado', { method: 'GET' });
            const json = await res.json();
            const { data } = json;
            const { languages } = data;
            // Search for HTML
            this.html = languages.find(l => l.name === 'HTML');

            // Search for CSS
            const css = languages.find(l => l.name === 'CSS');

            // Search for JavaScript
            const javaScript = languages.find(l => l.name === 'JavaScript');

            console.log('Hello', languages);
        },
    };
}

window.skills = skills;
