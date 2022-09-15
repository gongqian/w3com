

INSERT INTO w3com."Member"
("createdAt", email, "openId", name, "rewardPoints", "referedById", "level")
VALUES(CURRENT_TIMESTAMP, 'gongqian@test.com', 'openidforgongqian', 'Gongqian', 0, null, 'Silver'::w3com."MemberLevel");
INSERT INTO w3com."Member"
("createdAt", email, "openId", name, "rewardPoints", "referedById", "level")
VALUES(CURRENT_TIMESTAMP, 'laoding@test.com', 'openidforlaoding', 'laoding', 0, 1, 'Silver'::w3com."MemberLevel");

INSERT INTO w3com."Member"
("createdAt", email, "openId", name, "rewardPoints", "referedById", "level")
VALUES(CURRENT_TIMESTAMP, 'fuzi@test.com', 'openidforfuzi', 'fuzi', 0, 2, 'Silver'::w3com."MemberLevel");

INSERT INTO w3com."Member"
("createdAt", email, "openId", name, "rewardPoints", "referedById", "level")
VALUES(CURRENT_TIMESTAMP, 'test@test.com', 'openidfortest', 'test', 0, 2, 'Silver'::w3com."MemberLevel");

INSERT INTO w3com."Member"
("createdAt", email, "openId", name, "rewardPoints", "referedById", "level")
VALUES(CURRENT_TIMESTAMP, 'test1@test.com', 'openidfortest1', 'test1', 0, 2, 'Silver'::w3com."MemberLevel");


INSERT INTO w3com."Entity"
("createdAt", "updatedAt", "name", description, address, phone, "isVerified", "logoPath","createdById")
VALUES(CURRENT_TIMESTAMP,CURRENT_TIMESTAMP , 'Green Fields', 'Green field for fun', 'address', '404-444-444', false, 'http://localhost/log.png',1);

INSERT INTO w3com."Entity"
("createdAt", "updatedAt", "name", description, address, phone, "isVerified", "logoPath","createdById")
VALUES(CURRENT_TIMESTAMP,CURRENT_TIMESTAMP , 'Future work', 'future works', 'address', '404-555-5555', false, 'http://localhost/log.png',3);

INSERT INTO w3com."Entity"
("createdAt", "updatedAt", "name", description, address, phone, "isVerified", "logoPath","createdById")
VALUES(CURRENT_TIMESTAMP,CURRENT_TIMESTAMP , 'Destination Play', 'Green field for fun', 'address', '404-666-6666', false, 'http://localhost/log.png',1);

INSERT INTO w3com."EntityMember"
("memberId", "entityId", "createdAt", "updatedAt", note, "isAdmin", "isOwner", "isTracked", "isFavorite", "isContact", "assignedById")
VALUES(1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1st company', true, true, false, true, false, 1);
INSERT INTO w3com."EntityMember"
("memberId", "entityId", "createdAt", "updatedAt", note, "isAdmin", "isOwner", "isTracked", "isFavorite", "isContact", "assignedById")
VALUES(1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2nd company', true, true, false, true, false, 3);
INSERT INTO w3com."EntityMember"
("memberId", "entityId", "createdAt", "updatedAt", note, "isAdmin", "isOwner", "isTracked", "isFavorite", "isContact", "assignedById")
VALUES(1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3rd company', true, true, false, true, true, 1);

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 1', 'excellent'::w3com."ProductCondition", 'product 1', 'http://www.log.com', 1, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 2', 'excellent'::w3com."ProductCondition", 'product 2', 'http://www.log.com', 1, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 3', 'excellent'::w3com."ProductCondition", 'product 3', 'http://www.log.com', 1, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 4', 'excellent'::w3com."ProductCondition", 'product 4', 'http://www.log.com', 1, 'spec');
INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 5', 'excellent'::w3com."ProductCondition", 'product 5', 'http://www.log.com', 1, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 1', 'excellent'::w3com."ProductCondition", 'product 1', 'http://www.log.com', 2, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 2', 'excellent'::w3com."ProductCondition", 'product 2', 'http://www.log.com', 2, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 3', 'excellent'::w3com."ProductCondition", 'product 3', 'http://www.log.com', 2, 'spec');

INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 4', 'excellent'::w3com."ProductCondition", 'product 4', 'http://www.log.com', 2, 'spec');
INSERT INTO w3com."Product"
("createdAt", "updatedAt", "name", "condition", description, "logoPath", "entityId","spec")
VALUES(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Product 5', 'excellent'::w3com."ProductCondition", 'product 5', 'http://www.log.com', 2, 'spec');

INSERT INTO w3com."Campaign"
("createdAt", "updatedAt", "startedAt", "endedAt", "campaignType", "visibleToMemberOnly", "name", description, "rule", "imageIcon", "createdById")
VALUES(CURRENT_TIMESTAMP, null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'PingTuan'::w3com."CampaignType", false, 'Two is better than one', '', 'hurry up', 'http://www.google.com',1);


INSERT INTO w3com."PingTuanDetail"
("createdAt", "updatedAt", quantity, price, "productId", "campaignId")
VALUES(CURRENT_TIMESTAMP, null, 10, 3.12, 1, 1);
INSERT INTO w3com."PingTuanDetail"
("createdAt", "updatedAt", quantity, price, "productId", "campaignId")
VALUES(CURRENT_TIMESTAMP, null, 7, 5.78, 8, 1);

INSERT INTO w3com."PingTuanResponse"
("createdAt", "updatedAt", quantity, "memberId", "pingTuanDetailId")
VALUES(CURRENT_TIMESTAMP, null, 1, 3, 1);
INSERT INTO w3com."PingTuanResponse"
("createdAt", "updatedAt", quantity, "memberId", "pingTuanDetailId")
VALUES(CURRENT_TIMESTAMP, null, 2, 3, 1);
INSERT INTO w3com."PingTuanResponse"
("createdAt", "updatedAt", quantity, "memberId", "pingTuanDetailId")
VALUES(CURRENT_TIMESTAMP, null, 2, 4, 2);
