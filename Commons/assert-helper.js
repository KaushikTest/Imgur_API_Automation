

export function assertAccountBase(response) {
    let responsebody = response.body;
    expect(response.status).toBe(200);
    expect(response.body.data).not.toBeNull();
    expect(response.body.data).not.toBeUndefined();
    expect(responsebody.data.id).toBeTruthy();
    expect(responsebody.data.url).toBeTruthy();
    expect(responsebody.data.bio).toBeNull();
    expect(responsebody.data.avatar).toBeTruthy();
    expect(responsebody.data.avatar_name).toBeTruthy();
    expect(responsebody.data.cover).toBeTruthy();
    expect(responsebody.data.cover_name).toBeTruthy();
    expect(responsebody.data.reputation).toBe(0);
    expect(responsebody.data.reputation_name).toBe("Neutral");
    expect(responsebody.data.created).toBeTruthy();
    expect(responsebody.data.pro_expiration).toBe(false);
    expect(responsebody.data.user_follow.status).toBe(false);
    expect(responsebody.data.is_blocked).toBe(false);
    expect(responsebody.success).toBeTruthy();
    expect(responsebody.status).toBe(200);
}
