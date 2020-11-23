async function seedingPhones(Phone, initData) {
    const data = await Phone.find().exec();
    if (data.length !== 0) {
        return;
    }

    for (const item of initData) {
        const phone = new Phone({
            model: item.model,
            description: item.description,
            characteristics: {
                ...item.characteristics,
            },
        });

        await phone.save(function (error) {
            if (error) return console.error(error);
        });
    }
}

module.exports = seedingPhones;
